import React, {useEffect, useRef, useState} from 'react'
import './login.scss'
import {Content, Page, Block, Warning, Input, Button, Flex, Anchor, FlexSpacer, Loading} from 'gerami';
import Logo from '../../../assets/company/3f-transparent-logo.png'
import * as qs from 'qs'
import {RouteComponentProps} from "react-router";
import {useAccountDispatch, useAccountState} from "../../../app/store/account-provider";
import {logout} from "../../../app/store/account-actions";

export default function Login({ history }: RouteComponentProps<{}>){
    const query = qs.parse(window.location.search, { ignoreQueryPrefix: true}) || {};


  const { account } = useAccountState();
  const accountDispatch = useAccountDispatch();

  const [sending, setSending] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    if (account && query['continue']) history.replace(query['continue'])
  }, []);


  const handleLogin = async (e: any): Promise<void> => {
    e.preventDefault();
    setSending(true);
    e.target.submit()
  };

  const handleLogout = async (): Promise<void> => {
    setSending(true);
    logout(accountDispatch)
  };

    return(
      <Page top>
        {
          account ?(
              <Content size={'XL'}>
                <Block first last>
                  <Flex>
                <span>
                  {`account:logged-in-as`}
                  <br />
                  <Anchor to="/login/redirect/account">
                    {account.displayName} ({account.email})
                  </Anchor>
                </span>
                    <FlexSpacer />
                    {sending ? (
                        <Loading className={'padding-none'} />
                    ) : (
                        <Button onClick={handleLogout} disabled={sending} primary>
                          {`Logout`}
                        </Button>
                    )}
                  </Flex>
                </Block>
              </Content>
          ):(
              <>
                {  query.success == 'false' &&
                (query.status == '401' || query.code == 'WRONG_CREDENTIALS') && (
                <Content size={'XL'} className={'margin-bottom-big'}>
                  <Warning shy problem={`wrong-credentials`} />
                </Content>
                )}
              <Content size={'S'} style={{height: '300px'}}>
                <form
                    method={'POST'}
                    action={`/api/account/login?${qs.stringify(query)}`}
                    onSubmit={handleLogin}
                >
                  {query.problem && query.problem.code === 'WRONG_CREDENTIALS' ? (
                      <Block first>
                        <Warning shy bomb problem={'Wrong password.'} />
                      </Block>
                  ) : null}
                  <Block className="center">
                    <img alt={'Eastside logo'} id={'loginImg'} src={Logo} width="50%" height="50%" />
                  </Block>
                  <Block>
                    <Input
                        type={'email'}
                        name={'email'}
                        placeholder={'Email-address'}
                        className={'full-width'}
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                    />
                  </Block>
                  <Block>
                    <Input
                        type={'password'}
                        name="password"
                        placeholder={'Password'}
                        className={'full-width '}
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                    />
                  </Block>
                  <Block className={'center'}>
                    <Button type={'submit'} className={'right'}>
                      Login
                    </Button>
                  </Block>
                </form>
              </Content>
              </>
          )
        }
    </Page>
    )
}
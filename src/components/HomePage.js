import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import aidAssistHome from '../assets/aid-assist-home.png';
import aidAssistKE from '../assets/aid-assist-ke.png';
import explainWhy from '../assets/explain-why.png';
import auPayrollCalc from '../assets/au-payroll-calc.png';
import keOnboarding from '../assets/ke-onboarding-tiles.png';
import kePayrollOT from '../assets/ke-payroll-ot.png';
import franceFTU from '../assets/france-ftu.jpg';
import playerOneSoccer from '../assets/player-one-soccer.png';
import profilePic from '../assets/profile-pic.jpeg';
import bharathApr25 from '../assets/bharath-april25.jpg';
import kevinApr15 from '../assets/kevin-april15.jpg';
import gowriFeb from '../assets/gowri-feb.jpg';
import kevinMarch29 from '../assets/kevin-march29.jpg';
import yiApril from '../assets/yi-april.jpg';
import saikatNov from '../assets/saikat-nov.jpg';
import gangSep from '../assets/gang-sep.jpg';
import scottSep from '../assets/scott-sep.jpg';
import iramOct from '../assets/iram-oct.jpg';
import krishPayments from '../assets/krish-payments.png';

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container>
  
    <Grid inverted stackable>
      <Grid.Row>
        <Grid.Column width={3}>
          <Image bordered circular size='medium' src={profilePic} style={{
              fontSize: mobile ? '2em' : '4em',
              fontWeight: 'normal',
              marginTop: mobile ? '1.5em' : '3em',
            }} centered/>
        </Grid.Column>

        <Grid.Column width={10}>
        <Header
            as='h1'
            content="Hey there!"
            inverted
            style={{
              fontSize: mobile ? '2em' : '4em',
              fontWeight: 'normal',
              marginTop: mobile ? '1.5em' : '3em',
            }}/>
          <p style={{ fontSize: '1.33em' }}>
            I'm Regina Garcia. I'm a software engineer living in Cupertino, CA. I am currently at Intuit and have worked at various companies in the Bay Area
            including Paypal, vArmour and VMware. I have built several projects in JavaScript,
            NodeJS, ReactJS, CSS and HTML.
          </p>
          <p style={{ fontSize: '1.33em' }}>
            Feel free to drop me a <a href="mailto:mariaregina.garcia@gmail.com">note</a>. You can also connect with me on <a href="https://www.linkedin.com/in/regina-garcia/" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'><a href="mailto:mariaregina.garcia@gmail.com">Contact</a></Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Contact</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Intuit Aid Assist
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Intuit Aid Assist is a free service that aims to help small business owners who have been 
              adversely impacted by the COVID-19 crisis.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={aidAssistHome} centered />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Explain Why 
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              ExplainWhy describes how an outcome is calculated. It allows users to drill down
              information by traversing nodes from a Knowledge Graph. 
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={explainWhy} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              QuickBooks Payments Onboarding
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Payments Onboarding requires users to enter a significant amount of information in order to submit an application. 
              With data extraction, the user experience became leaner and less tedious, reducing onboarding time into just a few steps.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={keOnboarding} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              QuickBooks Payroll Overtime Exemption
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Labor laws are complicated. But with the Overtime Exemption flow, users are able to navigate these complex rules in
              order to determine whether or not their employees are eligible for overtime pay.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={kePayrollOT} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              QuickBooks Australia Payroll Calculator
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              This Payroll Calculator allows users to determine how their Paycheck is broken down. 
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={auPayrollCalc} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              QuickBooks France FTU
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              This First-Time-Use experience is powered by the Knowledge Engine, the same technology that runs
              behind TurboTax. By delivering a more intelligent and personalized experience, conversion jumped up
              from 34% to 87%. And reduced the amount of time to completion from 9 minutes to 2 minutes.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={franceFTU} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment vertical>
      <Header as='h3' style={{ fontSize: '2em' }}>
        Spotlights
      </Header>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Image bordered rounded size='large' src={krishPayments} centered />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Image bordered rounded size='large' src={bharathApr25} centered />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Image bordered rounded size='large' src={yiApril} centered/>
          </Grid.Column>

        </Grid.Row>

        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Image bordered rounded size='large' src={kevinApr15} centered/>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Image bordered rounded size='large' src={gowriFeb} centered />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Image bordered rounded size='large' src={saikatNov}centered />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Image bordered rounded size='large' src={kevinMarch29} centered/>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Image bordered rounded size='large' src={gangSep} centered />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Image bordered rounded size='large' src={scottSep}centered />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Image bordered rounded size='large' src={iramOct} centered/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Geek Girl Dinner 2019
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Presenter
        </p>

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          {/* <a href='#'>Case Studies</a> */}
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Intuit Tech Con 2019
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Presenter
        </p>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          {/* <a href='#'>Case Studies</a> */}
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Intuit Supercharge 2019
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Presenter
        </p>
        {/* <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button> */}
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
            </Grid.Column>

            <Grid.Column width={9}>
              {/* <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List> */}
              {/* <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default HomepageLayout
const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock;
const CodeTabsMarkdownBlock = require('../../core/CodeTabsMarkdownBlock.js');
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        <img src={`${baseUrl}img/en_middle_white.svg`} alt={siteConfig.title} />
        {/*{props.title}*/}
        {/*<small>{props.tagline}</small>*/}
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href="#about">More Info</Button>
            <Button href="https://native.electrode.io/">Documentation</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const CloudDivider = () => (
      <div className="cloudDivider">
        <div/>
      </div>
    )

    const WhatIsERN = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2 id="about">What is Electrode Native?</h2>
        <MarkdownBlock>
          **Electrode Native** is a mobile platform that simplifies development and streamlines
          the integration of React Native components into existing mobile applications.
          **Electrode Native** requires minimal changes to the existing mobile code base and
          infrastructure. Using **Electrode Native**, you can leverage React Native potential in
          your mobile application.
        </MarkdownBlock>
      </div>
    );

    const SuperchargeApp = () => (
      <div className="wrapper productShowcaseSection paddingBottom">
        <h2>Supercharge Your Native Application With React Native</h2>
        <GridBlock
          contents={[
            {
              content:
                'With Electrode Native, developers can work seamlessly on cross-platform ' +
                'components written in JavaScript using React Native—that can then be added to ' +
                'any iOS or Android mobile application.\n\n' +
                'Just select the features and components you want to add to your mobile ' +
                'application and Electrode Native will package them for you—in a single ' +
                'library that contains everything you need—making it easy to integrate into ' +
                'your mobile application without altering its code structure.',
              image: `${baseUrl}img/container.png`,
              imageAlign: 'right',
            },
          ]}
        />
      </div>
    );

    const VersionControl = () => (
      <div className="wrapper productShowcaseSection paddingBottom">
        <h2>Native Dependencies Version Control</h2>
        <GridBlock
          contents=
            {[
              {
                content:
                  'Relax knowing that all native dependency versions used by the React Native ' +
                  'components as part of your mobile application, will be compatible.\n\nElectrode ' +
                  'Native offers a built-in dependency version control system—allowing you to control ' +
                  'the version of native dependencies that your React Native components should be ' +
                  'aligned to—while it guarantees that no React Native component, using a ' +
                  'non-compatible native dependency, is included your mobile application.\n',
                image: `${baseUrl}img/version_check.png`,
                imageAlign: 'left',
              },
            ]}
        />
      </div>
    );

    const apiModelAndroid = `\`\`\`java
package com.example.api;

import com.example.model.Movie;

import com.walmartlabs.electrode.reactnative.bridge.ElectrodeBridgeEventListener;
import com.walmartlabs.electrode.reactnative.bridge.ElectrodeBridgeRequestHandler;
import com.walmartlabs.electrode.reactnative.bridge.ElectrodeBridgeResponseListener;
import com.walmartlabs.electrode.reactnative.bridge.None;

import java.util.*;

public final class MoviesApi {
    private static final Requests REQUESTS;

    static {
        REQUESTS = new MoviesRequests();
    }

    private MoviesApi() {
    }

    public static Requests requests() {
        return REQUESTS;
    }

    public interface Requests {
        String REQUEST_GET_MOVIE_DETAILS = "com.example.api.request.getMovieDetails";
        String REQUEST_GET_TOP_RATED_MOVIES = "com.example.api.request.getTopRatedMovies";

        void registerGetMovieDetailsRequestHandler(ElectrodeBridgeRequestHandler<String, Object> handler);

        void registerGetTopRatedMoviesRequestHandler(ElectrodeBridgeRequestHandler<None, List<Movie>> handler);

        void getMovieDetails(String movieId, ElectrodeBridgeResponseListener<Object> responseListener);

        void getTopRatedMovies(ElectrodeBridgeResponseListener<List<Movie>> responseListener);
    }
}
\`\`\``;

    const apiModelIos = `\`\`\`objective-c
public class MoviesAPI: NSObject  {
    static let kRequestGetMovieDetails = "com.example.api.request.getMovieDetails";

    static let kRequestGetTopRatedMovies = "com.example.api.request.getTopRatedMovies";

    public lazy var requests: MoviesAPIRequests = {
        return MoviesRequests()
    }()
}

public class MoviesAPIRequests: NSObject {
    public func registerGetMovieDetailsRequestHandler(handler: @escaping ElectrodeBridgeRequestCompletionHandler) {
        assertionFailure("should override")
    }

    public func registerGetTopRatedMoviesRequestHandler(handler: @escaping ElectrodeBridgeRequestCompletionHandler) {
        assertionFailure("should override")
    }

    public func getMovieDetails(movieId: String, responseCompletionHandler: @escaping ElectrodeBridgeResponseCompletionHandler) {
        assertionFailure("should override")
    }

    public func getTopRatedMovies(responseCompletionHandler: @escaping ElectrodeBridgeResponseCompletionHandler) {
        assertionFailure("should override")
    }
}
\`\`\``;

    const apiModelJs = `\`\`\`javascript
import {electrodeBridge} from 'react-native-electrode-bridge';
import MoviesRequests from './MoviesRequests';

const REQUESTS = new MoviesRequests(electrodeBridge);

export function requests() {
    return REQUESTS;
}

export default ({requests});
\`\`\``;

    const CodeGenerators = () => (
      <div
        className="productShowcaseSection paddingBottom wrapper"
        style={{textAlign: 'left'}}>
        <h2>Simple And Type Safe Communication</h2>
        <div>
          <p>
            Electrode Native ships with code generators—to let you focus on what matters. Just describe interactions
            using a Swagger schema, and Electrode Native will generate the boilerplate and client code and leave just
            the implementation to you.
          </p>
          <p>
            Generated code is also type-safe—so native developers will feel right at home and can leverage compile time
            checks. Also, if you're already using native modules—there's no need to throw them away, Electrode Native
            offers support to reuse them.
          </p>
        </div>
        <h3>Generated API Model</h3>
        <CodeTabsMarkdownBlock>
          {[
            {
              content: apiModelAndroid,
              title: 'Android',
            },
            {
              content: apiModelIos,
              title: 'iOS',
            },
            {
              content: apiModelJs,
              title: 'JavaScript',
            },
          ]}
        </CodeTabsMarkdownBlock>
      </div>
    );

    const Features = () => (
      <Block layout="twoColumn">
        {[
          {
            content: 'Using a Swagger schema, you can define interactions between JavaScript ' +
              'and native as requests and/or events. Electrode Native takes care of generating' +
              ' all the native and JavaScript boilerplate code for you.',
            image: `${baseUrl}img/icn-api.svg`,
            imageAlign: 'top',
            title: 'API Generation',
          },
          {
            content: 'Package multiple React Native applications together, in a single ' +
              'Container along with their native dependencies and assets. The Container is a ' +
              'library, that you can add to an iOS or Android mobile application to access the ' +
              'React Native applications stored within.',
            image: `${baseUrl}img/icn-container.svg`,
            imageAlign: 'top',
            title: 'Container Generation',
          },
          {
            content: 'The gatekeeper to your mobile application. The cauldron tracks versions, ' +
              'keeps history, and is in charge of running final compatibility checks before a ' +
              'React Native application is included in your mobile app.',
            image: `${baseUrl}img/icn-cauldron.svg`,
            imageAlign: 'top',
            title: 'Cauldron',
          },
          {
            content: 'Launch your React Native application on its own or along with other apps ' +
              'in an Android or iOS emulator or device. Useful during development of your React ' +
              'Native application to see the changes, debug, and test—before shipping it.',
            image: `${baseUrl}img/icn-runner.svg`,
            imageAlign: 'top',
            title: 'Runner',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <CloudDivider />
        <div className="mainContainer">
          <WhatIsERN />
          <SuperchargeApp />
          <CodeGenerators />
          <VersionControl />
          <Features />
          {/*<Showcase />*/}
        </div>
      </div>
    );
  }
}

module.exports = Index;

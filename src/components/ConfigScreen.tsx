import React, { Component } from 'react';
import { AppExtensionSDK } from '@contentful/app-sdk';
import { Heading, Form, Workbench, ValidationMessage } from '@contentful/forma-36-react-components';
import { css } from 'emotion';
import JSONInput from 'react-json-editor-ajrm';
import locale from './jsonLocale';

export interface AppInstallationParameters {
  tabs?: any;
  fields?: any;
}

interface ConfigProps {
  sdk: AppExtensionSDK;
}

interface ConfigState {
  parameters: AppInstallationParameters;
  error: string;
}

export default class Config extends Component<ConfigProps, ConfigState> {
  constructor(props: ConfigProps) {
    super(props);
    this.state = { parameters: {}, error: '' };

    // `onConfigure` allows to configure a callback to be
    // invoked when a user attempts to install the app or update
    // its configuration.
    props.sdk.app.onConfigure(() => this.onConfigure());
  }

  async componentDidMount() {
    // Get current parameters of the app.
    // If the app is not installed yet, `parameters` will be `null`.
    const parameters: AppInstallationParameters | null = await this.props.sdk.app.getParameters();

    this.setState(parameters ? { error: '', parameters } : this.state, () => {
      // Once preparation has finished, call `setReady` to hide
      // the loading screen and present the app to a user.
      this.props.sdk.app.setReady();
    });
  }

  onConfigure = async () => {
    // This method will be called when a user clicks on "Install"
    // or "Save" in the configuration screen.
    // for more details see https://www.contentful.com/developers/docs/extensibility/ui-extensions/sdk-reference/#register-an-app-configuration-hook

    // Get current the state of EditorInterface and other entities
    // related to this app installation
    const currentState = await this.props.sdk.app.getCurrentState();

    return {
      // Parameters to be persisted as the app configuration.
      parameters: this.state.parameters,
      // In case you don't want to submit any update to app
      // locations, you can just pass the currentState as is
      targetState: {
        EditorInterface: {
          ...currentState?.EditorInterface
        }

      },
    };
  };

  onParamsChange = async (value: any) => {
    const state = this.state

    if (!value.tabs) {
      this.setState({
        ...state,
        error: `Tab is required.`
      });
      return
    }

    if (!value.fields) {
      this.setState({
        ...state,
        error: `Fields is required.`
      });
      return
    }


    if (!Array.isArray(value.fields)) {
      this.setState({
        ...state,
        error: `Value for fields must be array.`
      });
      return
    }

    if (!Array.isArray(value.tabs)) {
      this.setState({
        ...state,
        error: `Value for tabs must be array.`
      });
      return
    }

    if (!value.tabs.length) {
      this.setState({
        ...state,
        error: `There must be at least one tab.`
      });
      return
    }

    if (!value.fields.length) {
      this.setState({
        ...state,
        error: `There must be at least one field.`
      });
      return
    }

    console.log(value)

    this.setState({
      ...state,
      parameters: value
    })
  };

  render() {
    let {error, parameters} =  this.state
    let paramaters = Object.assign({
      tabs: [
        'Content'
      ],
      fields: [
        {
          'field': 'content',
          'tab': 'Content'
        }
      ]
    }, parameters)
    return (
      <Workbench className={css({ margin: '80px' })}>
        <Form style={{minWidth: '40vw'}}>
          <Heading>Configuration</Heading>

          {
            error ? (
                <ValidationMessage>
                  {error}
                </ValidationMessage>
            ) : null
          }

          <JSONInput placeholder={paramaters}  locale={locale} onChange={({jsObject, error}: any) => error ? "" : this.onParamsChange(jsObject)} id={"tabs"}/>
        </Form>
      </Workbench>
    );
  }
}

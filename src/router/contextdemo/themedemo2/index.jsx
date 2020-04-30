import React, {Component} from 'react'
import {ThemeContext, themes} from './theme-context';
import ThemeTogglerButton from './theme-toggler-button';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
    // State 包含了 updater 函数 所以它可以传递给底层的 context Provider
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // 入口 state 传递给 provider
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <ThemeTogglerButton />
        </ThemeContext.Provider>
        <h2>哈哈哈哈</h2>
        <ThemeTogglerButton />
      </div>
    );
  }
}
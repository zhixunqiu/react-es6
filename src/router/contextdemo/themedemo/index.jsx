import React, {Component} from 'react'
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

// 一个使用到ThemedButton组件的中间组件
function Toolbar(props) {
    return (
      <ThemedButton onClick={props.changeTheme} color={'blue'}>
        Change Theme
      </ThemedButton>
    );
  }
  
 export default class ThemeChange extends Component {
    constructor(props) {
      super(props);
      this.state = {
        theme: themes.light,
      };
  
      this.toggleTheme = () => {
        this.setState(state => ({
          theme:
            state.theme === themes.dark
              ? themes.light
              : themes.dark,
        }));
      };
    }
  
    render() {
      // ThemedButton 位于 ThemeProvider 内
      // 在外部使用时使用来自 state 里面的 theme
      // 默认 dark theme
      return (
        <section>
          <ThemeContext.Provider value={this.state.theme}>
            <Toolbar changeTheme={this.toggleTheme} />
          </ThemeContext.Provider>
          <section>
            <ThemedButton />
          </section>
        </section>
      );
    }
  }
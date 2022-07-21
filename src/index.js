import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({

    resources: {
      en: {
        translation: {
          'Follows':'Follows',
          'Fans':'Fans',
          'Post':'Post',
          'Introduction': 'Introduction',
          'Favourite':'Favourite',
          'Song':'Song',
          'Artist':'Artist',
          'Albums':'Albums',
          'Time': 'Time',
            'Search': 'Search!',
            'Sign in': 'Sign in',
            'Sign out': 'Sign out',
            "Recommended": "Recommended",
            'Featured this Week':'Featured this Week',
            'Genre':'Genre',
            'Country':'Country',
            'China':'China',
            'Japan':'Japan',
            "Hip Pop": "Hip Pop",
            'R&B':'R&B',
            'rock': 'Rock',
            "You May Like":"You May Like",

            "Email address": "Email address",
            "Enter your email" : "Enter your email",
            "Password": "Password",
            "Never": "We'll never share your password with anyone else.",
            "Sign in !!": "Sign in !!",
            "Not have a Account? Sign up now!" : "Not have a Account? Sign up now!",

            "Sign up" :"Sign up",
            "User Name" : "User Name",
            "Enter User Name":"Enter User Name",
            "username hint": "User Name maximum characters allowed is 10",

            "password hint" : "Password should contain at least 6 characters",
            "re-enter": "Re-enter your Password",
            "Sign up !!": "Sign up !!",

            "Comment":"Comment"
        }
      },
      ch: {
        translation: {
          'Follows':'关注',
            'Fans':'粉丝',
            'Post':'推文',
            'Introduction': '简介',
            'Favourite':'最爱',
            'Song':'歌曲',
            'Artist':'艺术家',
            'Albums':'专辑',
            'Time': '时长',
            'Search': '搜索！',
            'Sign in': "登录",
            'Sign out': '登出',
            "Recommended": "推荐",
            'Featured this Week':'本周精选',
            'Genre':'风格',
            'Country':'国家',
            "China": '中国',
            "Japan": "日本",
            "Hip Pop": "嘻哈",
            'R&B':'蓝调',
            'rock':'摇滚',
            "You May Like":"猜你喜欢",

            "Email address": "电子邮箱",
            "Enter your email" : "输入你的邮箱",
            "Password": "密码",
            "Never": "我们绝不会泄露你的密码",
            "Sign in !!": "登录 !!",
            "Not have a Account? Sign up now!" : "没有账户？立即注册！",

            "Sign up" :"注册",
            "User Name" : "用户名",
            "Enter User Name":"输入你的用户名",
            "username hint": "用户名最长支持10个字符",

            "password hint" : "密码长度应当大于6个字符",
            "re-enter": "再次输入你的密码",
            "Sign up !!": "注册 !!",

            "Comment" : "评论"
        }
      }
    },
    lng: document.querySelector('html').lang, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

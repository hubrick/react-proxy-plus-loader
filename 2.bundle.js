webpackJsonp([2],{70:function(e,t,n){var r=n(7),i=r.createClass({displayName:"B",statics:{resolve:function(){var e=function(){return Promise.resolve({name:"Object first"})},t=function(){return new Promise(function(e){setTimeout(function(){e({name:"Object second"})},2e3)})};return Promise.all([e(),t()])}},render:function(){return r.createElement("div",null,r.createElement("p",null,"This is component B."),r.createElement("p",null,"Resolve Data: "),r.createElement("pre",null,JSON.stringify(this.props.resolveData)))}});e.exports=i}});
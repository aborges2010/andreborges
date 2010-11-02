package com.aborges.craAvaliation.bean;

import java.io.Serializable;

import org.apache.struts.action.ActionForm;

/*
*
* @author: Andr� Souza
*
*/


public class LoginForm extends ActionForm implements Serializable{

	private String loginEmail;
	static final long serialVersionUID = 1L;

	public LoginForm(String loginEmail){
		this.loginEmail = loginEmail;
	}

	public LoginForm(){
		super();
	}

	public void setLoginEmail(String loginEmail) {
		this.loginEmail = loginEmail;
	}
	public String getLoginEmail() {
		return loginEmail;
	}




}


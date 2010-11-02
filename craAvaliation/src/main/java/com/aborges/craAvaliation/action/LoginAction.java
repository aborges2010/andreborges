package com.aborges.craAvaliation.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.actions.DispatchAction;

import com.aborges.craAvaliation.bean.LoginForm;

public class LoginAction extends DispatchAction {

	public ActionForward newLogin(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {

		init();

		return mapping.findForward("newLoginSuccess");
	}

	public ActionForward verifyUser(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response){

		LoginForm loginForm = (LoginForm) form;

		if( !loginForm.getLoginEmail().isEmpty() ){
			System.out.println("e-mail: " + loginForm.getLoginEmail());
			/*if(checkPermission(loginForm.getLoginEmail())){
				return mapping.findForward("depoi3");
			}*/
		}



		return mapping.findForward("depois2notOK");
	}

	public void init() {

		LoginForm loginForm = new LoginForm();
		loginForm.setLoginEmail("");
	}

}

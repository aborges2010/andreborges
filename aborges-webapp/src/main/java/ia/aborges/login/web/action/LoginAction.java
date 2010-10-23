package ia.aborges.login.web.action;

import ia.aborges.login.struts.LoginForm;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.actions.DispatchAction;

public class LoginAction extends DispatchAction {

	public ActionForward newLogin(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {

		init();

		return mapping.findForward("depois");
	}
	
	public ActionForward verifyUser(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response){
		
		LoginForm loginForm = (LoginForm) form;
		
		if( !loginForm.getLoginEmail().isEmpty() ){
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

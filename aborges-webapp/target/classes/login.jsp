<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<%@ taglib uri="/WEB-INF/struts-bean.tld" prefix="bean" %>
<%@ taglib uri="/WEB-INF/struts-html.tld" prefix="html" %>
<%@ taglib uri="/WEB-INF/struts-logic.tld" prefix="logic" %>
<%@ taglib uri="/WEB-INF/struts-layout.tld" prefix="nested" %>
<%@ taglib uri="/WEB-INF/struts-nested.tld" prefix="nested" %>

<html>
	<body>
		<html:form action="login.do?method=verifyUser" method="post">
		  <bean:message key="prompt.usuario" />
		   <html:text property="usuario" size="20" maxlength="11"/>
		  <html:submit value="ok"/>
		</html:form>
	</body>
</html>

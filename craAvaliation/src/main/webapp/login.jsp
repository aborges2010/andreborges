<%@ include file="entete.jsp" %>
<html>
	<body>
		<html:form action="loginEmpty.do?method=verifyUser">
			  <bean:message key="prompt.loginEmail" />
			   <html:text property="loginEmail" size="50" maxlength="50"/>
			  <html:submit value="ok"/>
		</html:form>
	</body>
</html>
		
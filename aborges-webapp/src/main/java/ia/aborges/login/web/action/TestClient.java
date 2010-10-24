package ia.aborges.login.web.action;

import javax.naming.InitialContext;

import com.webage.ejbs.SimpleBean;

public class TestClient {

	public void runTest() throws Exception {
		InitialContext ctx = new InitialContext();
		
		SimpleBean bean = (SimpleBean) ctx.lookup("ejb/SimpleBeanJNDI");
		String result = bean.sayHello("Billy Bob");
		
		System.out.println(result);
	}

	public static void main(String[] args) {
		try {
			TestClient cli = new TestClient();
			cli.runTest();

		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}

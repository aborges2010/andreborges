package com.webage.ejbs;

import javax.ejb.Remote;

@Remote 
public interface SimpleBean {
 	public String sayHello(String name);
}

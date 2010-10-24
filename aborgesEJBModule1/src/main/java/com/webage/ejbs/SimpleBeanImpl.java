package com.webage.ejbs;

import javax.ejb.Stateless;

@Stateless(name = "Example", mappedName = "ejb/SimpleBeanJNDI")
public class SimpleBeanImpl implements SimpleBean {
	public String sayHello(String name) {
		return "Hello " + name + "!";
	}
}
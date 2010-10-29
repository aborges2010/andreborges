package com.MyEclipseide.ejb3;

import javax.ejb.Stateless;

/**
 * Session Bean implementation class MyBean
 */
@Stateless
public class MyBean implements MyBeanRemote, MyBeanLocal {

    /**
     * Default constructor. 
     */
    public MyBean() {
        // TODO Auto-generated constructor stub
    }
    
    public void doSomething() { 
        System.out.println("Hello World!"); 
    }

}

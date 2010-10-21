package ca.com.product;

import java.sql.Date;
import java.util.Iterator;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import ca.com.Util.HibernateUtil;

public class Main {
	
	static java.util.Date date = new java.util.Date();
	static java.sql.Date sqlDateToday = new java.sql.Date(date.getTime());
	
	public static void main(String[] args) {
		Main obj = new Main();
		Long productId1 = obj.saveProduct("Refrigerator", sqlDateToday);
		Long productId2 = obj.saveProduct("Stove", sqlDateToday);

		obj.listProduct();
		obj.updateProduct(productId2, "Pot");
		obj.deleteProduct(productId1);
		obj.saveProduct("Mixer", sqlDateToday);
		obj.listProduct();
				
	}

	public Long saveProduct(String productName, Date dtProd)

	{
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction transaction = null;
		Long productId = null;

		try {

			transaction = session.beginTransaction();
			
			RegisterBean product = new RegisterBean();
			 product.setProdName(productName);
			 product.setDateAchete(sqlDateToday);
				
			productId = (Long) session.save(product);
			transaction.commit();

		} catch (HibernateException e) {
			transaction.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
	return productId;
	}

	public void listProduct()

	{
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction transaction = null;

		try {
			transaction = session.beginTransaction();
			List products = session.createQuery("from RegisterBean").list();
			for (Iterator iterator = products.iterator(); iterator.hasNext();)
			{
				RegisterBean product = (RegisterBean) iterator.next();
				System.out.println(product.getProdName());
			}
			transaction.commit();
		} catch (HibernateException e) {
			transaction.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
	}

	public void updateProduct(Long productId, String productName)

	{
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction transaction = null;
		
		try {
			transaction = session.beginTransaction();
			
			RegisterBean product = (RegisterBean) session.get(RegisterBean.class, productId);
			product.setProdName(productName);
			transaction.commit();
			
		} catch (HibernateException e) {
			transaction.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
	}

	public void deleteProduct(Long productId)
	{
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			RegisterBean product = (RegisterBean) session.get(RegisterBean.class, productId);
			session.delete(product);
			transaction.commit();
		} catch (HibernateException e) {
			transaction.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
	}
}

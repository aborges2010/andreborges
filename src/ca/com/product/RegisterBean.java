package ca.com.product;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="PRODUCTS")
public class RegisterBean {

	private Long prodId;
	private String prodName;
	private Date dateAchete;

	public RegisterBean() {
	}
	
	public RegisterBean(String prodName){
		this.prodName = prodName;
	}
	
	@Id
	@GeneratedValue
	@Column(name="product_Id")
	public Long getProdId() {
		return this.prodId;
	}

	public void setProdId(Long prodId) {
		this.prodId = prodId;
	}

	@Column(name="product_name", nullable=false)
	public String getProdName() {
		return this.prodName;
	}

	public void setProdName(String prodName) {
		this.prodName = prodName;
	}

	@Column(name="dt_Achete", nullable=false)
	public Date getDateAchete() {
		return this.dateAchete;
	}

	public void setDateAchete(Date dateAchete) {
		this.dateAchete = dateAchete;
	}

}
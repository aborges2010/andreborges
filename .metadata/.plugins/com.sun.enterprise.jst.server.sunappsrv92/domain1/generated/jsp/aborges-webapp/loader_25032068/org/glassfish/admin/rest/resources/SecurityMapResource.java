/**
* DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
* Copyright 2009 Sun Microsystems, Inc. All rights reserved.
* Generated code from the com.sun.enterprise.config.serverbeans.*
* config beans, based on  HK2 meta model for these beans
* see generator at org.admin.admin.rest.GeneratorResource
* Very soon, this generated code will be replace by asm or even better...more dynamic logic.
* Ludovic Champenois ludo@dev.java.net
*
**/
package org.glassfish.admin.rest.resources;
import javax.ws.rs.*;
import org.glassfish.admin.rest.TemplateResource;
import com.sun.enterprise.config.serverbeans.SecurityMap;
public class SecurityMapResource extends TemplateResource<SecurityMap> {

	@Path("principal/")
	public PrincipalResource getPrincipalResource() {
		PrincipalResource resource = resourceContext.getResource(PrincipalResource.class);
		resource.setEntity(getEntity().getPrincipal() );
		return resource;
	}
	@Path("user-group/")
	public UserGroupResource getUserGroupResource() {
		UserGroupResource resource = resourceContext.getResource(UserGroupResource.class);
		resource.setEntity(getEntity().getUserGroup() );
		return resource;
	}
	@Path("backend-principal/")
	public BackendPrincipalResource getBackendPrincipalResource() {
		BackendPrincipalResource resource = resourceContext.getResource(BackendPrincipalResource.class);
		resource.setEntity(getEntity().getBackendPrincipal() );
		return resource;
	}
}

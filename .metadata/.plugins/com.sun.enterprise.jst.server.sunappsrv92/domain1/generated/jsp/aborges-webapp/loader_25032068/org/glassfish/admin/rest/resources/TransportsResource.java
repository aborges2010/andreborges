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
import com.sun.grizzly.config.dom.Transports;
public class TransportsResource extends TemplateResource<Transports> {

	@Path("transport/")
	public ListTransportResource getTransportResource() {
		ListTransportResource resource = resourceContext.getResource(ListTransportResource.class);
		resource.setEntity(getEntity().getTransport() );
		return resource;
	}
	@Path("selection-key-handler/")
	public ListSelectionKeyHandlerResource getSelectionKeyHandlerResource() {
		ListSelectionKeyHandlerResource resource = resourceContext.getResource(ListSelectionKeyHandlerResource.class);
		resource.setEntity(getEntity().getSelectionKeyHandler() );
		return resource;
	}
	@Path("property/")
	public ListPropertyResource getPropertyResource() {
		ListPropertyResource resource = resourceContext.getResource(ListPropertyResource.class);
		resource.setEntity(getEntity().getProperty() );
		return resource;
	}
}

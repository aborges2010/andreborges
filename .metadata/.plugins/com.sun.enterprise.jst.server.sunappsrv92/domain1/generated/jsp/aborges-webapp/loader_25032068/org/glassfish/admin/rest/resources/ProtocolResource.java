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
import com.sun.grizzly.config.dom.Protocol;
public class ProtocolResource extends TemplateResource<Protocol> {

@Path("create-http/")
public ProtocolCreateHttpResource getProtocolCreateHttpResource() {
ProtocolCreateHttpResource resource = resourceContext.getResource(ProtocolCreateHttpResource.class);
return resource;
}

@Path("delete-http/")
public ProtocolDeleteHttpResource getProtocolDeleteHttpResource() {
ProtocolDeleteHttpResource resource = resourceContext.getResource(ProtocolDeleteHttpResource.class);
return resource;
}

@Override
public String[][] getCommandResourcesPaths() {
return new String[][]{{"create-http", "POST"}, {"delete-http", "DELETE"}};
}

@Override
public String getDeleteCommand() {
	return "delete-protocol";
}
	@Path("port-unification/")
	public PortUnificationResource getPortUnificationResource() {
		PortUnificationResource resource = resourceContext.getResource(PortUnificationResource.class);
		resource.setEntity(getEntity().getPortUnification() );
		return resource;
	}
	@Path("http/")
	public HttpResource getHttpResource() {
		HttpResource resource = resourceContext.getResource(HttpResource.class);
		resource.setEntity(getEntity().getHttp() );
		return resource;
	}
	@Path("property/")
	public ListPropertyResource getPropertyResource() {
		ListPropertyResource resource = resourceContext.getResource(ListPropertyResource.class);
		resource.setEntity(getEntity().getProperty() );
		return resource;
	}
	@Path("ssl/")
	public SslResource getSslResource() {
		SslResource resource = resourceContext.getResource(SslResource.class);
		resource.setEntity(getEntity().getSsl() );
		return resource;
	}
	@Path("protocol-chain-instance-handler/")
	public ProtocolChainInstanceHandlerResource getProtocolChainInstanceHandlerResource() {
		ProtocolChainInstanceHandlerResource resource = resourceContext.getResource(ProtocolChainInstanceHandlerResource.class);
		resource.setEntity(getEntity().getProtocolChainInstanceHandler() );
		return resource;
	}
}

//<!--
// The contents of this file are subject to the terms
// of the Common Development and Distribution License
// (the License).  You may not use this file except in
// compliance with the License.
//
// You can obtain a copy of the license at
// https://woodstock.dev.java.net/public/CDDLv1.0.html.
// See the License for the specific language governing
// permissions and limitations under the License.
//
// When distributing Covered Code, include this CDDL
// Header Notice in each file and include the License file
// at https://woodstock.dev.java.net/public/CDDLv1.0.html.
// If applicable, add the following below the CDDL Header,
// with the fields enclosed by brackets [] replaced by
// you own identifying information:
// "Portions Copyrighted [year] [name of copyright owner]"
//
// Copyright 2007 Sun Microsystems, Inc. All rights reserved.
//

dojo.provide("webui.suntheme.widget.*");

dojo.kwCompoundRequire({
    common: [
        "webui.suntheme.widget.props",
        "webui.suntheme.widget.common"]
});

// For debugging only, obtain all module resources before invoking
// dojo.hostenv.writeIncludes(). This will ensure that JavaScript
// files are accessible to JavaScript debuggers.
dojo.requireIf(djConfig.isDebug, "webui.suntheme.widget.button");
dojo.requireIf(djConfig.isDebug, "webui.suntheme.widget.progressBar");
dojo.requireIf(djConfig.isDebug, "webui.suntheme.widget.table2");
dojo.requireIf(djConfig.isDebug, "webui.suntheme.widget.table2RowGroup");

dojo.require("dojo.ns");
dojo.registerNamespace("webui.suntheme", "webui.suntheme.widget");
dojo.widget.manager.registerWidgetPackage("webui.suntheme.widget");

//-->

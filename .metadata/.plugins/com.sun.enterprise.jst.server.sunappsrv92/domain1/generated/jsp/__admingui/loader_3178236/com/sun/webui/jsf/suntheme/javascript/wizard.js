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
// This Javascript file should be included in any page that uses the
// ui:wizard tag. It is included automatically by 
// com.sun.webui.jsf.renderkit.html.WizardRenderer.
//
// The wizard JavaScript object is accessed using the getElementById()
// function. Methods defined on that javascript object instance maybe
// called using that identifier. For example, the following javascript
// could be used to close and forward to a page when the wizard closes.
//
//   <ui:wizard ...other attributes... 
//	onPopupDismiss="document.getElementById('form1:wizard1').closeAndForward('launchform', '/faces/wizardData.jsp', true);" >
//
//	...wizard step tags...
//
//   </ui:wizard>
//

dojo.provide("webui.suntheme.wizard");

dojo.require("webui.suntheme.common");

/** 
 * Define webui.suntheme.wizard name space. 
 */ 
webui.suntheme.wizard = {
    /**
     * This function is used to initialize HTML element properties with the
     * following Object literals.
     *
     * <ul>
     *  <li>id</li>
     * </ul>
     *
     * Note: This is considered a private API, do not use.
     *
     * @param props Key-Value pairs of properties.
     */
    init: function(props) {
        if (props == null || props.id == null) {
            return false;
        }
        var domNode = document.getElementById(props.id);
        if (domNode == null) {
            return false;
        }

        // Set given properties on domNode.
        Object.extend(domNode, props);

        // Set functions.
        domNode.nextClicked = webui.suntheme.wizard.nextClicked;
        domNode.previousClicked = webui.suntheme.wizard.previousClicked;
        domNode.cancelClicked = webui.suntheme.wizard.cancelClicked;
        domNode.finishClicked = webui.suntheme.wizard.finishClicked;
        domNode.closeClicked = webui.suntheme.wizard.closeClicked;
        domNode.gotoStepClicked = webui.suntheme.wizard.gotoStepClicked;
        domNode.closePopup = webui.suntheme.wizard.closePopup;
        domNode.closeAndForward = webui.suntheme.wizard.closeAndForward;
        domNode.wizOnLoad = webui.suntheme.wizard.wizOnLoad;
        domNode.resize_hack = webui.suntheme.wizard.resize_hack;
    },

    nextClicked: function() {
        return true;
    },

    previousClicked: function() {
        return true;
    },

    cancelClicked: function() {
        return true;
    },

    closeClicked: function() {
        return true;
    },

    finishClicked: function() {
        return true;
    },

    gotoStepClicked: function() {
        return true;
    },

    closePopup: function() {
        window.close();
    },

    // Close the wizard popup and forward to "submitPage" by submitting
    // "submitForm".
    //
    // When the wizard closes it is often necessary to send
    // a request to a page that will make use of the data collected
    // during a wizard session. This method does this by obtaining the
    // form element "submitForm" from the page that launched the
    // the wizard. This means that the page that launched the wizard
    // popup must still be visible in a browser window. If that form
    // is found, the "action" property is set to "submitPage" and the
    // "submit" method of that "submitForm" is executed.
    // The popup window is then closed. 
    //
    // However due to JSF's client side state saving mode an extra step
    // must be taken. If the application is operating with client side
    // state saving, JSF will ignore the "submitPage" value of the
    // submitted form's "action" property and will send the request to the
    // view defined in the saved state, saved in an element in "submitForm".
    //
    // If the application is configured for client side state saving and
    // the "submitPage" is different from the page that lauched the wizard,
    // set "cleartState" to true. This method will clear the saved state 
    // before submitting the form. The "clearState" default value is false
    // and the saved state will not be cleared.
    // 
    // The "clearState" functionality only works with Sun's RI.
    //
    closeAndForward: function(submitForm, submitPage, clearState) {
        var f = window.opener.document.getElementById(submitForm);
        if (f == null) {
            alert("Can't find form " + submitForm);
            window.close();
        }

        if (clearState != null && clearState == true) {
            var elements = f.elements;
            var clientstate = null;
            for (var i = 0; i < elements.length; ++i) {
                // This only works for the Sun RI and is
                // dependent on the RIConstants.FACES_VIEW value
                // of "com.sun.faces.VIEW"
                //
                if (elements[i].name == this.facesViewState) {
                    clientstate = elements[i];
                    break;
                }
            }
            if (clientstate != null) {
                f.removeChild(clientstate);
            }
        }

        f.action = submitPage;
        f.submit();
        window.close();
    }, 

    // This method must be assigned to the onload handler of the onLoad
    // attribute of the ui:body tag if the wizard is to operate properly on IE.
    //
    wizOnLoad: function() {
        var stepsid = this.id + "_stepspane";
        var helpid = this.id + "_helppane";
        var wizbdyid = this.id + "_WizBdy";
        this.resize_hack(helpid, stepsid, wizbdyid);
    },

    // used only for popup window and IE, and called by wizOnLoad.
    //
    resize_hack: function(helpid, stepsid, wizbdyid) {
        if (webui.suntheme.common.browser.is_ie5up) {
            var bdy = document.getElementById(wizbdyid);

            if (bdy != null) {
                bdy.style.height = document.body.clientHeight - 145;

                if (helpid != null && helpid != '') {
                    var help = document.getElementById(helpid);
                    if (help != null) {
                        help.style.height = document.body.clientHeight - 90;
                    }
                }
                if (stepsid != null && stepsid != '') {
                    var steps = document.getElementById(stepsid);
                    if (steps != null) {
                        steps.style.height = document.body.clientHeight - 90;
                    }
                }
            }
        }
    }
}

//-->

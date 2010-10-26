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

dojo.provide("webui.suntheme.editableList");

/** 
 * Define webui.suntheme.editableList name space. 
 */ 
webui.suntheme.editableList = {
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

        // Not a facet does not have "extra" editable list id.

        // child elements
	// Get the field by calling the field getInputMethod
	// because only it knows about the underlying structure
	// of the rendered field component
	//
	domNode.list = 
	    webui.suntheme.listbox.getSelectElement(props.id + "_list");
		

        // Bug 6338492 -
        //     ALL: If a component supports facets or children is must be a
        //      NamingContainer
        // Since EditableList has become a NamingContainer the id's for
        // the facet children are prefixed with the EditableList id
        // in addition to their own id, which also has the 
        // EditableList id, as has been the convention for facets. This introduces
        // a redundancy in the facet id so the add button now looks like
        //
        // "formid:editablelistid:editablelistid:editablelistid_addButton"
        //
        // It used to be "formid:editablelistid_addButton"
        // It would be better to encapsulate that knowledge in the
        // EditableList renderer as does FileChooser which has the
        // same problem but because the select elements are not
        // facets in EditableList they really do only have id's of the
        // form "formid:addremoveid_list". Note that 
        // in these examples the "id" parameter is "formid:editablelistid"
        //
        // Therefore for now, locate the additional prefix here as the
        // "facet" id. Assume that id never ends in ":" and if there is
        // no colon, id is the same as the component id.
        //
        var componentid = props.id;
        var colon_index = componentid.lastIndexOf(':');
        if (colon_index != -1) {
            componentid = props.id.substring(colon_index + 1);
        }
        var facetid = props.id + ":" + componentid;

	// Get the field by calling the field getInputMethod
	// because only it knows about the underlying structure
	// of the rendered field component
	//
        domNode.field =
	    webui.suntheme.field.getInputElement(facetid /* + "_field"*/);
        domNode.addButton = document.getElementById(facetid + "_addButton"); 
        domNode.removeButton = document.getElementById(facetid + "_removeButton"); 
    
        // attach methods
        domNode.add = webui.suntheme.editableList.add;
        domNode.enableAdd = webui.suntheme.editableList.enableAdd;
        domNode.enableRemove = webui.suntheme.editableList.enableRemove;
        domNode.setAddDisabled = webui.suntheme.editableList.setAddDisabled;
        domNode.setRemoveDisabled = webui.suntheme.editableList.setRemoveDisabled; 
        domNode.updateButtons = webui.suntheme.editableList.updateButtons;
        domNode.setDisabled = webui.suntheme.editableList.setDisabled;
    },

    add: function(elementId) {
        this.enableAdd(); 
        this.addButton.click();
    },

    enableAdd: function() {
        var disabled = (this.field.value == ""); 
        this.setAddDisabled(disabled); 
    },

    setAddDisabled: function(disabled) {
        if(this.addButton.setDisabled != null) {
            this.addButton.setDisabled(disabled); 
        } else {
            this.addButton.disabled = disabled; 
        }
    },

    enableRemove: function() {
        var disabled = (this.list.selectedIndex == -1); 
        this.setRemoveDisabled(disabled); 
    },

    setRemoveDisabled: function(disabled) {
        if(this.removeButton.setDisabled != null) {
            this.removeButton.setDisabled(disabled); 
        } else {
            this.removeButton.disabled = disabled; 
        }
    },

    updateButtons: function() {
        this.enableAdd(); 
        this.enableRemove(); 
    },

    setDisabled: function(disabled) {
        if(this.addButton.setDisabled != null) {
            this.addButton.setDisabled(disabled); 
        } else {
            this.addButton.disabled = disabled; 
        }
        if(this.removeButton.setDisabled != null) {
            this.removeButton.setDisabled(disabled); 
        } else {
            this.removeButton.disabled = disabled; 
        }
        this.field.disabled = disabled; 
        this.list.disabled = disabled; 
    }
}

//-->

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

dojo.provide("webui.suntheme.commonTasksSection");

dojo.require("webui.suntheme.common");

/** 
 * Define webui.suntheme.commonTasksSection name space. 
 */
webui.suntheme.commonTasksSection = {
    /**
     * This function is used to initialize HTML element properties with the
     * following Object literals.
     *
     * <ul>
     *  <li>id: The HTML element ID for the component.</li>
     *  <li>pic1URL: Selected image.</li>
     *  <li>pic2URL: Hover image.</li>
     *  <li>pic3URL: Normal image.</li>
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
        domNode.hideAll = webui.suntheme.commonTasksSection.hideAll;
        domNode.addCommonTask = webui.suntheme.commonTasksSection.addCommonTask;
        domNode.addInfoPanel = webui.suntheme.commonTasksSection.addInfoPanel;
        domNode.windowResize = webui.suntheme.commonTasksSection.windowResize;
        domNode.onclick = domNode.hideAll;

        // Set task element array.
        domNode.taskElement = new Array();
        domNode.count = 0;

        // Hide panels on resize.
        window.onresize = function() {
            domNode.windowResize();
        }
    },

    // Hide all task sections.
    hideAll: function(event) {
        for (var i = 0; i < this.count; i++) {
            task = this.taskElement[i];
            if (task.infoPanel) {
               webui.suntheme.common.setVisibleElement(task.infoPanel.info, false);
               task.infoPanel.image.src = this.pic3URL;
            }
        }
        if (webui.suntheme.common.browser.is_ie5up) {
            window. event.cancelBubble = true;
        } else {
            event.stopPropagation();
        }
    },

    windowResize: function(event) {
        for (var i = 0; i < this.count; i++) {
            task = this.taskElement[i];
            if (task.infoPanel) {
               webui.suntheme.common.setVisibleElement(task.infoPanel.info, false);
               task.infoPanel.image.src = this.pic3URL;
            }
        }
    },

    /**
     * This function is used to add a common task with the
     * following Object literals.
     *
     * <ul>
     *  <li>commonTaskId:</li>
     *  <li>closeId:</li>
     *  <li>spacerId:</li>
     *  <li>infoIconId:</li>
     *  <li>infoPanelVar:</li>
     *  <li>imageLinkId:</li>
     * </ul>
     *
     * @param props Key-Value pairs of properties.
     */
    addCommonTask: function(props) {
        // Set info panel.
        var taskElement = document.getElementById(props.commonTaskId);
        taskElement.infoPanel = new this.addInfoPanel(this.id,
            props.commonTaskId, props.closeId, props.spacerId, props.infoIconId,
            props.infoPanelVar, props.imageLinkId);

        // Add task element to domNode.
        this.taskElement[this.count] = taskElement;
        this.count++;
    },

    /**
     * Add info panel to common task section.
     */
    addInfoPanel: function(sectionId, taskId, closeId, spacerVar,
            infoIconId, infoPanelVar, imageLinkId) {
        this.info = document.getElementById(taskId + infoPanelVar);  //id of the info panel box.
        this.image = document.getElementById(infoIconId); // id of the "i" image .
        this.imageLink = document.getElementById(imageLinkId);
        this.close = document.getElementById(closeId); // id of the close button.	
        this.spacer = taskId + ":" + spacerVar; // Just the id of the spacer image.
        this.parent = document.getElementById(sectionId);
        this.task = document.getElementById(taskId);
        var that = this;

        /**
         *Events which handle the closing of the div.
         */
        this.close.onclick = function(event) {     
           webui.suntheme.common.setVisibleElement(that.info, false);
            that.image.src = that.parent.pic3URL;	
            if (webui.suntheme.common.browser.is_ie5up) {
                window. event.cancelBubble = true;
            } else {
                event.stopPropagation();
            }
        }

        this.info.onclick = function(event) {
            webui.suntheme.common.setVisibleElement(that.info, true);
             if (webui.suntheme.common.browser.is_ie5up) {
                 window. event.cancelBubble = true;
            } else {
                    event.stopPropagation();
            }
        }

        /**
         * Events which handle the image changes for the "i" image.
         */
        this.imageLink.onmouseover = function() {
              if (!webui.suntheme.common.isVisibleElement(that.info)) {
                that.image.src = that.parent.pic2URL;
            } else {
                that.image.src = that.parent.pic1URL;
            }
        }

        this.imageLink.onfocus = function() {
              if (!webui.suntheme.common.isVisibleElement(that.info)) {
                that.image.src = that.parent.pic2URL;
            } else {
                that.image.src = that.parent.pic1URL;
            }
        }

        this.imageLink.onblur = function() {
              if (!webui.suntheme.common.isVisibleElement(that.info)) {
                that.image.src = that.parent.pic3URL;
            } else {
                that.image.src = that.parent.pic1URL;
            }
        }

        this.imageLink.onmouseout = function() {
              if (!webui.suntheme.common.isVisibleElement(that.info)) {
                that.image.src = that.parent.pic3URL;
            } else {
                that.image.src = that.parent.pic1URL;
            }
        }

        /**
         * Toggle functionality incorporated
         */
        this.image.onclick = function(event) {
            that.showInfoPanel();
            if (webui.suntheme.common.browser.is_ie5up) {
                window. event.cancelBubble = true;
            } else {
                event.stopPropagation();
            }
        }
        
        this.imageLink.onkeyup = function(event) {
            if(event.keyCode == 13) {
                that.showInfoPanel();
            }
                if (webui.suntheme.common.browser.is_ie5up) {
                     window.event.cancelBubble = true;
                } else {
                     event.stopPropagation();
                }
        }

        this.showInfoPanel = function() {
            var cts = this.parent;
            for (var i = 0; i < cts.count; i++) {
                task = cts.taskElement[i];
                if (task.infoPanel != null
                        && task.infoPanel.image.id != this.image.id) {
                    webui.suntheme.common.setVisibleElement(task.infoPanel.info, false);
                    task.infoPanel.image.src = cts.pic3URL;
                }
            }
 
              if (!webui.suntheme.common.isVisibleElement(this.info)) {
                webui.suntheme.common.setVisibleElement(this.info, true);
                this.getElementPosition2(this.image.id);
                this.getElementPosition(this.spacer);        
                    this.info.style.top = (this.ttop + 12) +'px';
                    this.info.style.left =  (this.tleft - 1) + 'px'
                this.info.style.width = (this.ileft - this.tleft) + 29+'px';
                this.close.focus();
                this.image.src = cts.pic1URL;
            } else {
                this.image.src = cts.pic3URL;
                webui.suntheme.common.setVisibleElement(this.info, false);
            }
        }  

        /*Javascript for setting the common task page's look and feel.*/

        // The prized coordinate locating function - Thank you Danny Goodman...
        this.getElementPosition = function(elemID) {
            var offsetTrail = document.getElementById(elemID);
            var offsetLeft = 0;
            var offsetTop = 0;

            while (offsetTrail) {
                offsetLeft += offsetTrail.offsetLeft;
                offsetTop += offsetTrail.offsetTop;
                offsetTrail = offsetTrail.offsetParent;
            }
            if (navigator.userAgent.indexOf("Mac") != -1 
                    && typeof document.body.leftMargin != "undefined") {
                alert("Undefined");
                offsetLeft += document.body.leftMargin;
                offsetTop += document.body.topMargin;
            }
            this.tleft=offsetLeft;
            this.ttop=offsetTop;
        }

        this.getElementPosition2 = function(elemID) {
            var offsetTrail = document.getElementById(elemID);
            var offsetLeft = 0;
            var offsetTop = 0;

            while (offsetTrail) {
                offsetLeft += offsetTrail.offsetLeft;
                offsetTop += offsetTrail.offsetTop;
                offsetTrail = offsetTrail.offsetParent;
            }
            if (navigator.userAgent.indexOf("Mac") != -1 && 
                typeof document.body.leftMargin != "undefined") {
                offsetLeft += document.body.leftMargin;
                offsetTop += document.body.topMargin;
            }
            this.ileft=offsetLeft;
        }
    }
}

//-->

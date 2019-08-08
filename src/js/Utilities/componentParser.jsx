import componentContainerParser from './componentContainerParser.jsx';
import componentItemParser from './componentItemParser.jsx';

const componentParser = function(component = null, subcomponentHandlers = null) {
    // parse the component object's containers and contents
    return (function(componentContainers, componentContents) {
        // for each outer container of the component, build the container and its inner containers and then
        // add the array of componentContents corresponding to the index of the component's container
        return componentContainers.map((container) => {
            return componentContainerParser(container, componentContents);
        });
    })(component.componentContainers, (function(componentContents, subcomponentHandlers) {
        // however before we can build the containers of the component, we must build the componentContents, check to
        // see if there is a subcomponent in the componentContents. If so then we call the componentParser function 
        // from a subcomponent. it also checks the componentContents is a list
        if(typeof(componentContents) === "object") {
            return componentContents.map((item) => {
                // if the current item is a subcomponent and there is a subcomponent handler provided by the parent component
                if(item.componentType && subcomponentHandlers) {
                    return subcomponentHandlers(item);
                    // for any other itemContents
                } else {
                    return componentItemParser(item);
                }
            });
            // if componentContents is just a single object
        } else if(componentContents.componentType && subcomponentHandlers) {
            return subcomponentHandlers(componentContents);
            // for any other itemContents
        } else {
            return componentItemParser(componentContents);
        }
    })(component.componentContents, subcomponentHandlers));
};

export default componentParser;
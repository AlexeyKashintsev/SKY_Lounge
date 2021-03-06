(function() {
    var className = "com.eas.client.reports.ReportTemplate";
    var javaClass = Java.type(className);
    var space = this['-platypus-scripts-space'];
    space.putPublisher(className, function(aDelegate) {
        return new P.ReportTemplate(null, null, null, null, aDelegate);
    });
    
    /**
     * Creates report template.
     * @param content The report binary body (array of byte).
     * @param name The generated report default.
     * @param format The generated report format hint (used by runtime while report generation).
     * @param data Object that propeties can be added to the report.
     * @constructor ReportTemplate ReportTemplate
     */
    P.ReportTemplate = function (content, name, format, data) {
        var maxArgs = 4;
        var delegate = arguments.length > maxArgs ?
              arguments[maxArgs] 
            : arguments.length === 4 ? new javaClass(P.boxAsJava(content), P.boxAsJava(name), P.boxAsJava(format), P.boxAsJava(data))
            : arguments.length === 3 ? new javaClass(P.boxAsJava(content), P.boxAsJava(name), P.boxAsJava(format))
            : arguments.length === 2 ? new javaClass(P.boxAsJava(content), P.boxAsJava(name))
            : arguments.length === 1 ? new javaClass(P.boxAsJava(content))
            : new javaClass();

        Object.defineProperty(this, "unwrap", {
            configurable: true,
            value: function() {
                return delegate;
            }
        });
        if(P.ReportTemplate.superclass)
            P.ReportTemplate.superclass.constructor.apply(this, arguments);
        delegate.setPublished(this);
        Object.defineProperty(this, "timezoneOffset", {
            get: function() {
                var value = delegate.timezoneOffset;
                return P.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.timezoneOffset = P.boxAsJava(aValue);
            }
        });
        if(!P.ReportTemplate){
            /**
             * Array of name collections, that will fixed.
             * @property timezoneOffset
             * @memberOf ReportTemplate
             */
            P.ReportTemplate.prototype.timezoneOffset = 0;
        }
        Object.defineProperty(this, "name", {
            get: function() {
                var value = delegate.name;
                return P.boxAsJs(value);
            },
            set: function(aValue) {
                delegate.name = P.boxAsJava(aValue);
            }
        });
        if(!P.ReportTemplate){
            /**
             * Name of the generated report's file.
             * @property name
             * @memberOf ReportTemplate
             */
            P.ReportTemplate.prototype.name = '';
        }
        Object.defineProperty(this, "fixed", {
            get: function() {
                var value = delegate.fixed;
                return value;
            },
            set: function(aValue) {
                delegate.fixed = aValue;
            }
        });
        if(!P.ReportTemplate){
            /**
             * Array of name collections, that will fixed.
             * @property fixed
             * @memberOf ReportTemplate
             */
            P.ReportTemplate.prototype.fixed = {};
        }
    };
        /**
         * Generate report from template.
         * @method generateReport
         * @memberOf ReportTemplate
         */
        P.ReportTemplate.prototype.generateReport = function() {
            var delegate = this.unwrap();
            var value = delegate.generateReport();
            return P.boxAsJs(value);
        };

})();
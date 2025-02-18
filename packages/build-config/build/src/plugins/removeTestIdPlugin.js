export var removeTestIdPlugin = function () {
    return {
        name: 'removeTestIdPlugin',
        visitor: {
            Program: function (path, state) {
                var _a;
                var forbiddenProps = (_a = state.opts.props) !== null && _a !== void 0 ? _a : [];
                path.traverse({
                    JSXIdentifier: function (current) {
                        var nodeName = current.node.name;
                        if (forbiddenProps.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
};

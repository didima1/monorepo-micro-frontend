import { PluginItem } from '@babel/core'

export const removeTestIdPlugin = (): PluginItem => {
    return {
        name: 'removeTestIdPlugin',
        visitor: {
            Program(path, state) {
                const forbiddenProps = state.opts.props ?? []

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name
                        if (forbiddenProps.includes(nodeName)) {
                            current.parentPath.remove()
                        }
                    },
                })
            },
        },
    }
}

export function EmptyArgumentsException(message ) {
    this.message =  'function invoked without any parameter: ' + message
    this.name = 'Empty Arguments Exception'
    this.code = 1
}

export function InvalidArgumentsException(message) {
    this.message =  'function invoked with invalid parameters: ' + message
    this.name = 'Invalid Arguments Exception'
    this.code = 2
}

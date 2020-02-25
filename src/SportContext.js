import React from 'react'

const SportContext = React.createContext({})

export const SportProvider = SportContext.Provider
export const SportConsumer = SportContext.Consumer
export default SportContext
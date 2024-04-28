const currentDate = (): string => {
    const newDate = new Date().toISOString()
    return newDate
}

export { currentDate }

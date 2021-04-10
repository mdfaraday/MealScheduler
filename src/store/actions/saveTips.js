export const STORE_RESOURCE = 'STORE_RESOURCE'
export const STORE_SECTION = 'STORE_SECTION'

export const storeResource = (name) => {
    return { type: STORE_RESOURCE, 
        info: {
            name
        }
    }
}

export const storeSection = ( name, title, description ) => {
    return { type: STORE_SECTION, 
        info: {
            name,
            title,
            description
        }
    }
}
class helper{
    resetform = (object) => {
        Object.keys(object).forEach((key) => (object[key] = ''));
        return object;
    };
}

const resetObject = (object) =>{
    Object.keys(object).forEach((key) => (object[key] = ''));
    return object;
};

export{ resetObject };

export default new helper();
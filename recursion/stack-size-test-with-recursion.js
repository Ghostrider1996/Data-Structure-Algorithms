function testStackSize(bytes = 0) {
    try {
        return testStackSize(bytes + 1); // Increase stack usage
    } catch (e) {
        console.log(`Stack size is approximately ${bytes * 4} bytes`); // Assume ~4 bytes per call
    }
}

testStackSize();
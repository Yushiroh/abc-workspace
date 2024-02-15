describe("anita", function(){

    it("should deploy properly", async function(){
        const anitaCoin = await ethers.getContractFactory("anita");
        const contract = await anitaCoin.deploy();
    });
});
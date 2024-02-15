describe("anitaCoin", function(){

    it("should deploy properly", async function(){
        const anitaCoin = await ethers.getContractFactory("anitaCoin");
        const contract = await anitaCoin.deploy();
    });
});
const Bank = artifacts.require("Bank");

contract('Bank', (accounts) => {

    const ownerAccount = accounts[0];

    before(async () => {
        bank = await Bank.new(ownerAccount);
        console.log("before exec...");
    });

    console.log("bank address : " + Bank.address);

    it('은행의 주인은 첫번째 계정이다.', async () => {
        const owner = await bank.owner();
        assert(owner === ownerAccount, '첫번째 계정이 아니다.');
    });

    it('은행의 예금을 테스트 한다.', async () => {

        // await bank.deposit({from: accounts[1], value: 2000000000000000000});
        // await bank.deposit({from: accounts[2], value: 2000000000000000000});
        await bank.deposit({from: accounts[1],value: web3.toWei(2, 'ether')});
        await bank.deposit({from: accounts[2], value: web3.toWei(5, 'ether')});
        await bank.deposit({from: accounts[3], value: web3.toWei(5, 'ether')});
    });

    it('은행의 출금을 테스트 한다.', async () => {
        // 출금
        await bank.withdraw({from: ownerAccount});
    });
});
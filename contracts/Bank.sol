pragma solidity ^0.4.24;

contract Bank {

    // 계좌의 소유주
    address public owner;

    constructor(address _owner) public {
        owner = _owner;
    }

    // 입금 메소드
    // payable : 이더리움 트랜젝션 발생 (이더리움을 전송)
    // payable function 이므로 송금 로직을 작성하지 않고도 이더리움을 전송
    // msg.value : payable 함수를 실행할 때 인자로 msg 객체를 전달
    function deposit() public payable {
        // 입금(deposit) 금액이 0 WEI 이상인지 검사
        require(msg.value > 0);
    }

    // 출금 메소드
    // msg.sender 는 함수를 실행하는 주체(address)입니다. 값은 함수 실행시 자동 할당
    function withdraw() public {
        require(msg.sender == owner);

        // owner 가 잔고를 이전
        owner.transfer(address(this).balance);
    }

}
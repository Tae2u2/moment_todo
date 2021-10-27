const kawais = [
    {character : "피카츄",
        ment : "백만볼트를 내뿜는 날이 될거에요! 나를 화나게 하는 사람은 꼬리로 날려버리세요!"},
    {character :"뚱이" ,
        ment :"사랑해요~ 오늘은 친구에게 뚱이가 되어주세요! 너를 사랑해서 네가 하는 건 다 좋아!"},
    {character :"스펀지밥",
        ment :"월요일 좋아! 긍정적인 마음으로 활기차게 보내면 좋은 일이 생길거에요!"},
    {character :"파이리",
        ment : "파..이...리... 쳐져있으면 몸까지 지치게 될거에요! 내 몸에 온도를 올리는 가벼운 운동을 추천합니다!"},
    {character :"꼬부기",
        ment : "등딱지가 필요한 날! 누군가의 기분나쁜 말은 가볍게 무시하세요! 물대포로 날려버려도 좋아요!"},
    {character :"집게",
        ment : "난 돈이 좋아! 오늘 하루는 집게사장이 되어 돈 쓰지 말고 저금해보기!"},
    {character :"뚜벅초",
        ment : "나를 삭막하게 만드는 곳에서 벗어나 물을 주는 하루를 보내세요! 일단 가볍게 물 한잔 원샷하기!"},
    {character :"피글렛",
        ment : "자꾸만 움츠러드는 날엔 피글렛처럼 웃어보기! 거울을 보고 배잡고 웃다보면 나..쫌 귀여울지도?"},
    {character :"푸",
        ment : "지쳐보이는 사람을 꼭 안아주기! 사랑은 나누면 배가 되고, 슬픔은 나누면 반이 되니까. 둘다 모두 나눠줄게!"},
    {character :"티거",
        ment : "내가 꼬리로 점프하는 거 볼래? 오늘은 나의 작은 잘남도 주변에 자랑해보세요! 난 너무 멋져!"}
]

const kawai = document.querySelector("#character span:first-child");
const kawaiMent = document.querySelector("#character span:last-child");


const todayKawai = kawais[Math.floor(Math.random()* kawais.length)];

kawai.innerText = todayKawai.character;
kawaiMent.innerText = todayKawai.ment;

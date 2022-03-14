export default {
  getChats,
  getChatById,
};

const gChats = [
  {
    id: '000',
    userName: 'Camel',
    userMessage: '',
    contactMessage:
      'Hi mom, I need to go for a walk, please take me. Thank you mom, love you',
    time: '9:00 AM',
    fullDate: '6 March 2022',
    userPic:
      'https://res.cloudinary.com/disku3v4j/image/upload/v1646835107/whatapp/camel1_tklpbm.jpg',
  },
  {
    id: '001',
    userName: 'Open for work',
    userMessage: 'Hi im daniiel and im open for work! call me today',
    contactMessage: 'You are hired!',
    time: '11:00 PM',
    fullDate: '6 March 2022',
    userPic:
      'https://res.cloudinary.com/disku3v4j/image/upload/v1638299902/photo-1438761681033-6461ffad8d80_bhahe9.jpg',
  },
  {
    id: '002',
    userName: 'Brenda',
    contactMessage:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquam arcu orci, in porta ex pretium non. Etiam sit amet quam ex. Pellentesque bibendum enim at urna mattis blandit. Nam in commodo nulla. Suspendisse potenti. Duis rhoncus purus malesuada, accumsan libero id, tristique nisl. Nunc rutrum lacus nulla, eu faucibus eros commodo consequat. Aenean vel ultrices erat.',
    userMessage: '',
    time: '13:00 PM',
    fullDate: '6 March 2022',
    userPic:
      'https://res.cloudinary.com/disku3v4j/image/upload/v1638300901/nintchdbpict000375250199-e1514556349190_c5m6mn.jpg',
  },

  {
    id: '003',
    userName: 'Dad',
    contactMessage:
      'Nulla ornare ultricies eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ullamcorper felis et dapibus semper. Praesent ut aliquet enim, sed posuere mi. In tempor id tortor vitae lacinia. Donec ut massa sed sapien fringilla bibendum eget in metus. Fusce ac eros est. Proin placerat ullamcorper augue, in cursus purus dictum a. Ut iaculis, erat vel congue varius, erat dui laoreet metus, eu efficitur nisl neque a mi. Fusce pretium interdum tortor id rhoncus. Fusce congue tempus libero, ut cursus enim congue vitae. Ut malesuada libero eget risus ultricies, nec aliquet diam faucibus. Proin cursus quam massa. In hac habitasse platea dictumst. Proin nec mi nisi.',
    userMessage: '',
    time: 'Sunday',
    fullDate: '5 March 2022',
    userPic:
      'https://res.cloudinary.com/disku3v4j/image/upload/v1638300901/pexels-photo-1300402_wtxf88.jpg',
  },
  {
    id: '004',
    userName: 'Mom',
    userMessage: '',
    contactMessage: 'You do not answer the phone, please call Grandma',
    time: 'Sunday',
    fullDate: '5 March 2022',
    userPic:
      'https://res.cloudinary.com/disku3v4j/image/upload/v1638300900/images_ouiaoe.jpg',
  },
  {
    id: '005',
    userName: 'Guy',
    userMessage: '',
    contactMessage:
      'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include a search engine, online advertising technologies, cloud computing, software, and hardware',
    time: 'Sunday',
    fullDate: '5 March 2022',
    userPic:
      'https://res.cloudinary.com/disku3v4j/image/upload/v1638300901/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662_fw9js6.jpg',
  },
  {
    id: '006',
    userName: 'Shir',
    userMessage: '',
    contactMessage:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.    ',
    time: 'Sundya',
    fullDate: '5 March 2022',
    userPic:
      'https://res.cloudinary.com/disku3v4j/image/upload/v1638300901/istockphoto-1254176393-170667a_qlvfgr.jpg',
  },
  {
    id: '007',
    userName: 'Noam',
    userMessage: '',
    contactMessage: 'Youre bringing a lemon pie for Friday, right?',
    time: 'Monday',
    fullDate: '5 March 2022',
    userPic:
      'https://res.cloudinary.com/disku3v4j/image/upload/v1638300062/our_kind_of_people_lance_gross_2x_ssvg9h.jpg',
  },
  {
    id: '008',
    userName: 'Maya',
    userMessage: '',
    contactMessage:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum',
    time: 'Monday',
    fullDate: '5 March 2022',
    userPic:
      'https://res.cloudinary.com/disku3v4j/image/upload/v1638300900/download_xbgfnw.jpg',
  },
  {
    id: '009',
    userName: 'Ben',
    userMessage: '',
    contactMessage:
      'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    time: 'Monday',
    fullDate: '5 March 2022',
    userPic:
      'https://res.cloudinary.com/disku3v4j/image/upload/v1638299790/testimonial-bg-2_nmdwjl.jpg',
  },
];

function getChats(filterBy = null) {
  return new Promise((resolve, reject) => {
    var chatsToReturn = gChats;
    if (filterBy && filterBy.term) {
      chatsToReturn = filter(filterBy.term);
    }
    resolve(sort(chatsToReturn));
  });
}

function getChatById(id) {
  return new Promise((resolve, reject) => {
    const chat = gChats.find((chat) => chat.id === id);
    chat ? resolve(chat) : reject(`Chat id ${id} not found!`);
  });
}

function sort(arr) {
  return arr.sort((a, b) => {
    if (a.time.toLocaleLowerCase() < b.time.toLocaleLowerCase()) {
      return -1;
    }
    if (a.time.toLocaleLowerCase() > b.time.toLocaleLowerCase()) {
      return 1;
    }

    return 0;
  });
}

function filter(term) {
  term = term.toLocaleLowerCase();
  return gChats.filter((chat) => {
    return chat.userName.toLocaleLowerCase().includes(term);
  });
}

exports.render =
function (req, res) {
  if (req.session.lastVisit) {
    console.log(req.session.lastVisit);
  }

  req.session.lastVisit = new Date();

  var myName = 'David Owens';
  var listTitle = 'The MEAN Stack';

  var definitions = [
    {
      name: 'MongoDB',
      definition: 'MongoDB is a document-oriented database that stores flexible data in JSON-like documents.'
    },
    {
      name: 'Express',
      definition: 'Express is a Node.js web framework used to create routes, handle requests, and return responses.'
    },
    {
      name: 'Angular',
      definition: 'Angular is a front-end framework used to build dynamic single-page web applications with reusable components.'
    },
    {
      name: 'Node.js',
      definition: 'Node.js is a JavaScript runtime that executes server-side code outside of a web browser.'
    }
  ];

  res.render('index', {
    myName: myName,
    listTitle: listTitle,
    definitions: definitions
  });
};

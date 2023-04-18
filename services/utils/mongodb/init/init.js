db.createUser({
  user: 'backend',
  pwd: 'swordfish',
  roles: [
    {
      role: 'readWrite',
      db: 'backend',
    },
  ],
});

// db = new Mongo().getDB("testDB");

db.createCollection('users', { capped: false });

db.users.insert([{ email: 'me@martinnirtl.com', password: 'some-hashed-pw', name: 'Martin Nirtl' }]);

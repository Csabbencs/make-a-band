import Post from './models/post';

export default function () {
  Post.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const post1 = new Post({ name: 'John Lennon', instrument: 'Rhytym Guitar', singer: true, cuid: 'cikqgkv4q01ck7453ualdn3hd' });
    const post2 = new Post({ name: 'Paul McCartney', instrument: 'Bass Guitar', singer: true, cuid: 'cikqgkv4q01ck7453ualdn3he' });
    const post3 = new Post({ name: 'George Harrison', instrument: 'Solo Guitar', singer: true, cuid: 'cikqgkv4q01ck7453ualdn3hf' });
    const post4 = new Post({ name: 'Ringo Starr', instrument: 'Drums', singer: false, cuid: 'cikqgkv4q01ck7453ualdn3hg' });	

    Post.create([post1, post2, post3, post4], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}

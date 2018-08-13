import React, { Component } from 'react';
import Serie from './components/Serie';
import Movie from './components/Movie';
import Home from './components/Home';
import DemoHeader from './components/Header.js';
import PageTitle from './components/PageTitle.js';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Titles',
      activePanel: 'Home',
      list: []
    }
    this.fetchList = this.fetchList.bind(this);
    this.updateTitle =  this.updateTitle.bind(this);
    this.updateActivePanel = this.updateActivePanel.bind(this);
    this.setList =  this.setList.bind(this);
    this.viewList = this.viewList.bind(this);
  }
  updateActivePanel (panel) {
    this.setState({
      activePanel: panel
    });
  }
  updateTitle (title) {
    this.setState({
      title: title
    });
  }
  setList (titleType) {
    this.fetchList(titleType).then((listing) => {
      var listArray = []
      listing.forEach((list,index)=>{
        if(index < 21) {
          listArray.push({
            title: list.title,
            images: list.images
          });
        }
      });
      this.setState({
        list: listArray
      });
    });
  }
  viewList () {
    console.log(this.state.list);
  }
  fetchList (titleType) {
    const url = 'https://gist.githubusercontent.com/jkongie/075ead69b9aaeb45581b995fbeef4ad6/raw/2688f82b789bddbab24875f4395a83aca5909d5a/feed.json';
        var filterList = [];
        return fetch(url).then( function(response) {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error('Server response wasn\'t OK');
            }
        }).then( function(data) {
         console.log(data);
         filterList = data.entries.filter((list)=>{
            if(list.programType === titleType && list.releaseYear >= 2010 ) {
                return list;
            }
         });
         filterList.sort(function(a,b){
            var titleA = a.title.toUpperCase(); // ignore upper and lowercase
            var titleB = b.title.toUpperCase(); // ignore upper and lowercase
             if(titleA < titleB) {
                 return -1;
             }
             if(titleA > titleB) {
                 return 1;
             }
             return 0;
         });
         return filterList;
        });
  }
  render() {
    const imageUrl="https://previews.123rf.com/images/ildogesto/ildogesto1210/ildogesto121000015/15547891-icon-for-clapper-board-dark-background-file-contains-objects-with-transparency-.jpg";
    return (
      <div className="App">
           <DemoHeader/>
           <PageTitle title={this.state.title} />
           { this.state.activePanel === 'Series' ? 
            <Serie list={this.state.list}/>
            : this.state.activePanel === 'Movies' ? 
           <Movie list={this.state.list}/>
           : this.state.activePanel === 'Home' ?
           <Home 
           updateActivePanel={this.updateActivePanel} 
           updateTitle={this.updateTitle}
           setList={this.setList}
           imageUrl={imageUrl}/>
           : "No active Panel"
          }
      </div>
    );
  }
}

export default App;

(function(){

  let q = document.querySelectorAll('.content h5');
  let lastItem = q[(q.length - 1)];
  let tabsContainer;

  function activateTab(index) {
    let tabs = tabsContainer.querySelectorAll('.nav-link');
    q.forEach((el, i) => {
      if (i === index) {
        tabs[i].className = 'nav-link active';
        el.parentNode.className = 'active p-3';
      } else {
        tabs[i].className = 'nav-link';
        el.parentNode.className = 'hidden';
      }
    });
  }

  function createTabs(q) {
    tabsContainer = document.createElement('ul');
    tabsContainer.className = 'nav nav-tabs';

    q.forEach((el, index) => {
      let tab = document.createElement('li');
      tab.className = 'nav-item';

      let link = document.createElement('a');
      link.className = 'nav-link';
      link.innerText = el.innerText;
      link.addEventListener('click', function(){
        activateTab(index);
      });

      tab.append(link);
      tabsContainer.append(tab);
    });

    q[0].parentNode.parentNode.prepend(tabsContainer);
  }

  q.forEach((el, index) => {

    if (el !== lastItem) {
      let nextItem = q[(index + 1)];
      let selector = el.nextSibling;
      let wrapper = document.createElement('div');

      el.parentNode.insertBefore(wrapper, el);
      wrapper.append(el);

      while(selector !== nextItem && selector !== null) {
        wrapper.append(selector);
        selector = wrapper.nextSibling;
      }
    }
    else if (el === lastItem) {
      let selector = el.nextSibling;
      let wrapper = document.createElement('div');

      el.parentNode.insertBefore(wrapper, el);
      wrapper.append(el);

      while(selector !== null) {
        wrapper.append(selector);
        selector = wrapper.nextSibling;
      }
    }
  });

  createTabs(q);
  activateTab(0);

})();
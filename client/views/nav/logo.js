Template[getTemplate('logo')].helpers({
  site_title: function(){
    return Settings.get('title', "Toloka");
  },
  logo_url: function(){
    return Settings.get('logoUrl');
  }
});

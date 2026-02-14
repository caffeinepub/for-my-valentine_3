import Map "mo:core/Map";
import Text "mo:core/Text";
import List "mo:core/List";
import Iter "mo:core/Iter";

actor {
  type Texts = List.List<Text>;
  let dictionary = Map.empty<Text, Texts>();

  // Add a word to the map. If the word already exists, do nothing.
  public func addWord(word : Text) : async () {
    switch (dictionary.get(word)) {
      case (null) {
        let list = List.empty<Text>();
        dictionary.add(word, list);
      };
      case (?_list) {}; // Word already exists, do nothing
    };
  };

  // Add translations for a word. If the word does not exist, do nothing.
  public func addTranslations(word : Text, translations : [Text]) : async () {
    switch (dictionary.get(word)) {
      case (?list) {
        let translationsIter = translations.values();
        list.addAll(translationsIter);
      };
      case (null) {}; // Word does not exist, do nothing
    };
  };

  // Get translations for all words
  public query func getTranslations() : async [(Text, [Text])] {
    let iter = dictionary.entries();
    let mappedIter = iter.map(
      func((word, texts)) { (word, texts.toArray()) }
    );
    mappedIter.toArray();
  };

  // Delete a word from the map
  public func deleteWord(word : Text) : async () {
    dictionary.remove(word);
  };
};

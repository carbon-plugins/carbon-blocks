export const reducer = (draft, a) => {
	switch (a.type) {
		// Default
    case "SET_DATA": {
      draft.version 		= a.data.version;
      draft.options 		= a.data.options;
      draft.license 		= a.data.license;
      break;
    }
		case "toggle_delete_all_on_remove": {
			draft.options.deleteAllOnRemove = !draft.options.deleteAllOnRemove
			break;
		}
	}
}

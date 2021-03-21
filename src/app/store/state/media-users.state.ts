
import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { MediaUsersAction } from '../action/media-users.action';

export interface MediaUsersStateModal {
    allUsers: [];
}

const defaults: MediaUsersStateModal = {
    allUsers: null
};

@State<MediaUsersStateModal>({
    name: 'mediausers',
    defaults
})

@Injectable()
export class MediaUsersState {
    @Selector()
    static getAllSocialMediaUsers(state: MediaUsersStateModal) {
        return [...state.allUsers];
    }

    @Action(MediaUsersAction)
    socialMediaUsers(ctx: StateContext<MediaUsersStateModal>, action: MediaUsersAction) {
        ctx.setState({
            allUsers: action.item
        });
    }
}

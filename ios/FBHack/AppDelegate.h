//
//  AppDelegate.h
//  FBHack
//
//  Created by Brandon Millman on 10/5/12.
//  Copyright (c) 2012 Brandon Millman. All rights reserved.
//

#import <UIKit/UIKit.h>


@interface AppDelegate : UIResponder <UIApplicationDelegate>

- (void)openSession;

@property (strong, nonatomic) UIWindow *window;

@property (strong, nonatomic) UIViewController *mainViewController;

@property (strong, nonatomic) UINavigationController *navController;


@end
